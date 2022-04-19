import React, { Component } from "react";
import { View, StatusBar, Text, TouchableOpacity } from "react-native"
import { fontWeight } from "styled-system";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hitung: 0
        };

    }

    inputAngka = (value) => {
        if (this.state.hitung == 0) {
            this.setState({ hitung: value })
        }
        else {
            this.setState({ hitung: this.state.hitung + '' + value });
        }
    }

    hitungHasil = () => {
        let hasil = eval(this.state.hitung);
        this.setState({ hitung: hasil })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffe1a8', }}>
                <StatusBar backgroundColor="#212121" barStyle="light-content" />

                <View style={{ flex: 0.3, borderWidth: 4, borderColor: '#e26d5c', marginVertical: 30, marginHorizontal: 10, justifyContent: 'center', borderRadius: 10, }}>
                    <Text style={{ color: '#472d30', fontSize: 48, fontWeight: 700, textAlign: "right", marginHorizontal: 10 }}>{this.state.hitung}</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, marginHorizontal: 10, }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#e26d5c', borderRadius: 10, }}
                            onPress={() => this.setState({ hitung: 0 })}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700, fontWeight: 700, }}>CLEAR</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row',}}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c'  }}
                            onPress={() => this.inputAngka(1)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(2)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10, }}
                            onPress={() => this.inputAngka('-')}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700,}}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10,}}
                            onPress={() => this.inputAngka('+')}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700,}}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row',}}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c',}}
                            onPress={() => this.inputAngka(3)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c', }}
                            onPress={() => this.inputAngka(4)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10, }}
                            onPress={() => this.inputAngka('/')}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700, }}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10, }}
                            onPress={() => this.inputAngka('*')}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700,}}>*</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(5)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(6)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10, }}
                            onPress={() => this.inputAngka('%')}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700,}}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, backgroundColor: '#472d30', borderRadius: 10, margin: 10, }}
                            onPress={() => this.hitungHasil()}
                        >
                            <Text style={{ color: '#ffe1a8', fontSize: 24, textAlign: 'center', fontWeight: 700,}}>=</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(7)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(8)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(9)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', padding: 10, borderRadius: 10, margin: 10, borderWidth: 4, borderColor: '#e26d5c' }}
                            onPress={() => this.inputAngka(0)}
                        >
                            <Text style={{ color: '#e26d5c', fontSize: 24, fontWeight: 700, textAlign: 'center', }}>0</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

export default Calculator;