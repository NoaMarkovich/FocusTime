import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.item}>You haven't compleated any task yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>⁙ {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});

export default FocusHistory;
