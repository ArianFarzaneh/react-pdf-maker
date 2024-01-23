import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
const styles = StyleSheet.create({
  page: {
    border: "5px outset red",
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
  },
  container: {
    margin: 10,
    padding: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
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
          <Text>new customer info: </Text>
        </View>
        {/* 1 */}
        <View style={styles.container}>
          <Text style={styles.text}>customer name: {name}</Text>
        </View>
        {/* 2 */}
        <View style={styles.container}>
          <Text style={styles.text}>customer last name: {lastname}</Text>
        </View>
        {/* 3 */}
        <View style={styles.container}>
          <Text style={styles.text}>customer age: {age}</Text>
        </View>
        {/* 4 */}
        <View style={styles.container}>
          <Text style={styles.text}>customer date of sign: {date}</Text>
        </View>
        {/* 5 */}
        <View style={styles.container}>
          <Text style={styles.text}>customer email: {email}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default MyDocument;
