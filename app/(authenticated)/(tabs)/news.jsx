import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const newsData = [
  { id: '1', title: 'News Article 1', content: 'This is the content of news article 1.' },
  { id: '2', title: 'News Article 2', content: 'This is the content of news article 2.' },
  { id: '3', title: 'News Article 3', content: 'This is the content of news article 3.' },
];

const News = () => {
  const renderItem = ({ item }) => (
    <View style={styles.article}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  article: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default News;