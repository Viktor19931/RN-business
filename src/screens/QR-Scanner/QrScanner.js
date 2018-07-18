// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Button
// } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
//
// export default class App extends React.Component {
//     state = {
//         mode: 'view'
//     };
//
//     onSuccess = (e) => {
//         this.setState({
//             mode: 'view'
//         });
//         alert('this data => ' + e.data);
//     };
//
//     onOpenQRcode = () => {
//         this.setState({
//             mode: 'qr-code'
//         });
//     };
//
//     render() {
//         let content = (
//             <Button
//                 onPress={this.onOpenQRcode}
//                 title="Scan QR-Code"
//                 color="#841584">
//             </Button>
//         );
//
//         if (this.state.mode === 'qr-code') {
//             content = (
//                 <QRCodeScanner
//                     onRead={this.onSuccess}
//                     topContent={
//                         <Text style={styles.centerText}>
//                             Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
//                         </Text>
//                     }
//                     bottomContent={
//                         <TouchableOpacity style={styles.buttonTouchable}>
//                             <Text style={styles.buttonText}>OK. Got it!</Text>
//                         </TouchableOpacity>
//                     }
//                 />
//             );
//         }
//         return (
//             <View style={styles.viewContainer}>
//                 {content}
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     viewContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     centerText: {
//         flex: 1,
//         fontSize: 18,
//         padding: 32,
//         color: '#777',
//     },
//     textBold: {
//         fontWeight: '500',
//         color: '#000',
//     },
//     buttonText: {
//         fontSize: 21,
//         color: 'rgb(0,122,255)',
//     },
//     buttonTouchable: {
//         padding: 16,
//     },
// });
