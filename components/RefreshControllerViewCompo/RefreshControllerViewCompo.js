import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';

const RefreshControllerViewCompo = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Pull down to see RefreshControl indicator</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default RefreshControllerViewCompo;
