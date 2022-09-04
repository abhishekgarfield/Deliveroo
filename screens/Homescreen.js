import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../Components/categories";
import FeaturedRow from "../Components/featuredrow";

const Homescreen = () => {
  const localhst="192.168.167.254"
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [featuredRows, setfeaturedRows] = useState([]);
  const getCatogries = async () => {
    try {
      const response = await fetch(`http://${localhst}:8000/categories`);
      if (response.status == 404) {
        return;
      } else {
        setCategories(await response.json());
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getFeaturedRow = async () => {
    try {
      const response = await fetch(`http://${localhst}:8000/featuredrow`);
      if (response.status == 404) {
        return;
      } else {
        setfeaturedRows(await response.json());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    getCatogries();
    getFeaturedRow();
  }, []);
  return (
    <SafeAreaView style={styles.droidsafearea}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={styles.dp}
          />
        </View>
        <View style={{ paddingLeft: 5, flexGrow: 1 }}>
          <Text style={styles.deliverText}>Deliver now !</Text>
          <Text style={styles.currentLocationtext}>
            Current location
            <ChevronDownIcon
              size={15}
              style={{ color: "skyblue", paddingTop: 10 }}
            />
          </Text>
        </View>
        <UserIcon size={30} style={{ color: "skyblue" }} />
      </View>
      {/* search box */}
      <View style={{ flexDirection: "row", margin: 3, paddingHorizontal: 5 }}>
        <View
          style={{
            flexDirection: "row",
            flexGrow: 1,
            flexBasis: 80,
            backgroundColor: "lightgrey",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <MagnifyingGlassIcon
            size={20}
            style={{ color: "skyblue", marginHorizontal: 3 }}
          />
          <TextInput
            placeholder="Restaurents and cousines"
            keyboardType="default"
            style={{ flexBasis: 100, flexGrow: 1 }}
          />
        </View>
        <AdjustmentsHorizontalIcon
          size={33}
          style={{ color: "skyblue", width: "inherit", marginLeft: 2 }}
        />
      </View>
      {/* offers */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 70,
        }}
      >
        {/* categories */}
        <ScrollView
          style={{ marginVertical: 5, marginLeft: 2 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories?.map((item, index) => (
            <Categories item={item} key={index} />
          ))}
        </ScrollView>

        {/* featured */}
        {featuredRows?.map((item, index) => {
          return <FeaturedRow item={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  droidsafearea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  dp: {
    height: 35,
    width: 35,
    padding: 4,
    backgroundColor: "lightgrey",
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  deliverText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "lightgrey",
  },
  currentLocationtext: {
    fontWeight: "bold",
    fontSize: 15,
    alignItems: "center",
  },
});
export default Homescreen;
