import { Button } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import { getChain } from '../../APIMethods/ChainRequests/ChainAPI';
import ChainBox from '../Components/ChainBox';
import AppButton from "../Components/AppButton";
import { getAllPlayersInGame } from "../../APIMethods/RoomRequests/RoomAPI";

const FinalScreen = ({roomId, handleNavigation}) => {
    const [chain, setChain] = useState([]);
    const [chainIndex, setChainIndex] = useState(0);
    const [prompt, setPrompt] = useState('');
    const [renderedChain, setRenderedChain] = useState([]);
    const [numberOfChains, setNumberOfChains] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            const chainData = await getChain(roomId, chainIndex);
            console.log("CHAIN", chainData);
            setChain(chainData);
        };
        const getNumberOfPlayers = async () => {
            const players = await getAllPlayersInGame(roomId);
            console.log("PLAYERS", players);
            setNumberOfChains(players.length);
        };
        fetchData();
        getNumberOfPlayers();
    }, [chainIndex]);

    useEffect(() => {
        if (!chain) {
            return;
        }
    
        const timerIds = [];
        const result = [];
    
        console.log("AUDIO LIST", chain?.audioList);
        const length = Math.max(chain?.audioList?.length || 0, chain?.guessList?.length || 0);
    
        for (let i = 0; i < length; i++) {
            if (i < (chain?.audioList?.length || 0)) {
                result.push(chain.audioList[i]);
            }
            if (i < (chain?.guessList?.length || 0)) {
                result.push(chain.guessList[i]);
            }
        }
    
        result.forEach((item, index) => {
            const timeoutId = setTimeout(() => {
                setRenderedChain((prevItems) => [...prevItems, item]);
                console.log(renderedChain)
            }, 3000 * (index + 1));
            timerIds.push(timeoutId);
        });
    
        return () => {
            // Clear all the timers when the component unmounts
            timerIds.forEach(clearTimeout);
        };
    }, [chain, chainIndex]);
    
    const goToNextChain = () => {
        if (chainIndex + 1 < numberOfChains) {
            setChainIndex(chainIndex + 1);
            setRenderedChain([]);
        } else {
            //naviate to end screen
            handleNavigation('end-game');
            console.log("END SCREEN")
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Original Prompt</Text>
            <Text style={{fontSize: 36}}>{chain?.prompt}</Text>
            <View style={styles.chainBoxContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {renderedChain.map((item) => {
                        return <ChainBox item={item} />
                    })}
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Next Chain" onPress={() => goToNextChain()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    title: {
        fontSize: 48,
        marginTop: 20
    },
    chainBoxContainer: {
        marginTop: 50,
        maxHeight: '60%',
        width: '100%'
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
});
export default FinalScreen;
