import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-Time");
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi! Bright</Text>
        <Text style={styles.welcomeMessage}>find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Welcome;
