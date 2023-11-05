import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import React from "react";

const Screen02 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://65419dfcf0b8287df1fe8be4.mockapi.io/donut")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    //   <View>
    //     <Text>Screen02</Text>
    //     <Image source={{ uri: item.image }}></Image>
    //   </View>
    <View style={styles.container}>
      <Pressable
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Screen01");
        }}
      >
        <Text style={{ borderWidth: 1, borderRadius: 5, width: 300 }}>
          Back
        </Text>
      </Pressable>
      {data.map((item) => {
        return (
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 300, height: 300}}
            />
          </View>
        );
      })}
      <View>
        <Text></Text>
      </View>
    </View>
  );
};
export default Screen02;

const styles = StyleSheet.create({});
