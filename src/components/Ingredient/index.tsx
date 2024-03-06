import { Pressable, Text, Image } from "react-native"

import { styles } from "@/components/Ingredient/style"

export default function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image source={require("@/assets/apple.png")} style={styles.image}/>

      <Text style={styles.title}>Maça</Text>
    </Pressable>
  )
}
