import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Modal, StyleSheet, Animated, TouchableOpacity, Image, ToastAndroid, Linking } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/theme';
import { icons, images, FONTS, SIZES, COLORS } from '../../constants';
import { scale } from '../../utils/shared';




interface Props {
    visible: boolean;
    message: string;
    onPress: () => void;
    HandleCancel: () => void;
    title: string;
    ImageSource: boolean;
    url?: string;
    Header: string
}

const NotificationModal: React.FC<Props> = ({ visible, message, HandleCancel, onPress, Header, title, ImageSource, url }) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const closeModal = () => {
        // onPress(); // Call the onPress function to close the modal
    };

    return (
        <Modal transparent visible={showModal} animationType="fade">
            <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
             
            >
                <View style={styles.centeredView}>
                    <Animated.View
                        style={[
                            styles.modalcontainer,
                            { transform: [{ scale: scaleValue }] },
                        ]}
                    >
                        <View style={{ width: SCREEN_WIDTH * 0.81 }}>
                            <View style={{flexDirection: 'row', marginTop: scale(-15), marginBottom: scale(10), justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={styles.gateText}>{Header}</Text>

                            <TouchableOpacity
                                style={{ alignItems: 'flex-end', justifyContent: 'flex-end', }}
                                onPress={HandleCancel}>
                                <Image
                                    source={icons.xcancel}
                                    style={{ height: 12, width: 12 }}
                                />
                            </TouchableOpacity>

                            </View>
                           

                            {
                                ImageSource &&
                                <TouchableOpacity onPress={onPress}>
                                    <Image
                                        style={{ height: SCREEN_HEIGHT * 0.18, width: '100%', resizeMode: 'cover', borderRadius: scale(10) }}
                                        source={images.apartment2}                                    />
                                </TouchableOpacity>
                            }

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scale(5) }}>
                                <Text style={{ ...FONTS.h4, fontSize: scale(13), color: COLORS.black }}>
                                    <Text style={{ fontWeight: '600' }}>{title}</Text>
                                </Text>
                            </View>

                            <View style={{ marginTop: scale(5) }}>
                                <Text style={{ textAlign: 'justify' }}><Text style={styles.text}>{message}</Text></Text>
                            </View>

                        </View>
                    </Animated.View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gateText: {
      ...FONTS.h4b,
      color: COLORS.primary
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalcontainer: {
        width: '90%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 33,
        borderRadius: 8,
        elevation: 20,
    },
    text: {
        ...FONTS.h5,
        fontSize: scale(12),
        color: COLORS.gray60Text,
        textAlign: 'justify'
    }
});

export default NotificationModal;
