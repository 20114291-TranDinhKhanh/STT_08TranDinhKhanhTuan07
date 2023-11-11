// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import ReactSearchBox from "react-search-box";
import { useNavigation } from "@react-navigation/native";

// export default function App() {

const Screen01 = ({ route }) => {
  const navigation = useNavigation();
  const dataParam = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://65419dfcf0b8287df1fe8be4.mockapi.io/keyboard")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 700, bottom: 40, right: 140 }}>
        Welcome, Jala!
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 700, bottom: 40, right: 100 }}>
        Choice you Best food
      </Text>
      <View style={{ width: 350, right: 25 }}>
        <ReactSearchBox placeholder="Search food" />
      </View>
      <br />
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{
            width: 100,
            height: 40,
            margin: 25,
            borderRadius: 5,
            alignItems: "center",
            backgroundColor: "lightgrey",
          }}
        >
          <Text style={{ top: 8, fontSize: 14, fontWeight: 700 }}>Donut</Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            height: 40,
            margin: 25,
            borderRadius: 5,
            alignItems: "center",
            backgroundColor: "lightgrey",
          }}
        >
          <Text style={{ top: 8, fontSize: 14, fontWeight: 700 }}>
            Pink Donut
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            height: 40,
            margin: 25,
            borderRadius: 5,
            alignItems: "center",
            backgroundColor: "lightgrey",
          }}
        >
          <Text style={{ top: 8, fontSize: 14, fontWeight: 700 }}>
            Floating
          </Text>
        </Pressable>
      </View>
      {data.map((item) => {
        return (
          <View
            style={{
              width: 400,
              height: 100,
              margin: 10,
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "#F4DDDD",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                left: 10,
                top: 10,
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />
            <Pressable
              role="button"
              onPress={() => {
                navigation.navigate("Screen02");
              }}
            >
              <Text
                style={{ width: 400, fontSize: 20, fontWeight: 700, left: 40 }}
              >
                {item.name}
              </Text>
            </Pressable>
            {/*  */}

            {/*  */}

            <Text
              style={{ fontWeight: 700, fontSize: 20, top: 60, right: 360 }}
            >
              {item.price}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "grey",
                top: 10,
                right: 200,
              }}
            >
              {item.description}
            </Text>
            {/* <Button
              title="Delete"
              onPress={() => {
                fetch(url + "/" + item.id, {
                  method: "DELETE",
                });
              }}
            ></Button> */}
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Screen01;
