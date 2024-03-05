import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
const styles = StyleSheet.create({
  page: {
    border: "3px dashed black",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
  },
  container: {
    margin: 10,
    padding: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: "24",
    fontWeight: "extrabold",
    color: "red",
  },
  text: {
    fontSize: "18",
    fontWeight: "normal",
    color: "blue",
  },
  subject: {
    fontSize: "28",
    fontWeight: "bold",
    color: "black",
  },
});
const MyDocument = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getData();
  }, []);
  function handleData(data) {
    data = data.at(-1);
    setName(data.name);
    setLastName(data.lastName);
    setAge(data.age);
    setDate(data.dateOfSign);
    setEmail(data.email);
  }
  async function getData() {
    const res = await fetch("http://localhost:3000/Data");
    const data = await res.json();
    handleData(data);
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.subject}>new customer info: </Text>
        </View>
        {/* 1 */}
        <View style={styles.container}>
          <Text style={styles.title}>customer name: </Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        {/* 2 */}
        <View style={styles.container}>
          <Text style={styles.title}>customer last name:</Text>
          <Text style={styles.text}>{lastname}</Text>
        </View>
        {/* 3 */}
        <View style={styles.container}>
          <Text style={styles.title}>customer age: </Text>
          <Text style={styles.text}>{age}</Text>
        </View>
        {/* 4 */}
        <View style={styles.container}>
          <Text style={styles.title}>customer date of sign:</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        {/* 5 */}
        <View style={styles.container}>
          <Text style={styles.title}>customer email:</Text>
          <Text style={styles.text}> {email}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default MyDocument;
