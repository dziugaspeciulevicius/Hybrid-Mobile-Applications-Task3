import React, { useState, Component } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, View, Text } from "react-native";
// import { getAds } from "../actions/adActions";
// import { connect } from "react-redux";
// import { render } from "react-dom";

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // const adList = useSelector((state) => state.orderDetails);
  // dispatch(adList(getAds));
  return (
    <View style={styles.container}>
      <Text>Home screen here</Text>
    </View>
  );
};
// };

// const mapStateToProps = (state) => {
  // return {
    // listOfAds: state.adList,
  // };
// };

// export default connect(mapStateToProps, { getAds })(HomeScreen);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
