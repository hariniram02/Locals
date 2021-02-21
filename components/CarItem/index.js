import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="secondary"
          content={"Cuisine"}
          onPress={() => {
            Linking.openURL('https://www.cafeamneuensee.de/biergarten/ ')
          }
          }
        />
        <StyledButton
          type="secondary"
          content={"Landscape"}
          onPress={() => {

            Linking.openURL('https://www.xn--krnerpark-07a.de/')
          }
          }
        />
        <StyledButton
          type="secondary"
          content={"Culture"}
          onPress={() => {
            Linking.openURL('https://www.getyourguide.com/berlin-l17/berlin-field-station-teufelsberg-guided-tour-w-transfer-t93354/?partner_id=1GJEF0A&utm_medium=online_publisher&placement=content-top&cmp=50-things-to-do-in-berlin_amcid-BPOVp6Mrle7Msmr7mIBsA&deeplink_id=6fa928dc-5448-51aa-bf85-2364530ca61c')
          }
          }
        />

        <StyledButton
          type="primary"
          content={"Share"}
          onPress={() => {
            console.warn("Opening E-mail!");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;
