import { Image, Pressable, PressableProps, Text } from "react-native"

import { styles } from "@/components/Ingredient/styles"

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}

export default function Ingredient({ 
  name, 
  image, 
  selected = false, 
  ...rest 
}: IngredientsProps & PressableProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} 
      {...rest}
    >
      <Image source={require("@/assets/apple.png")} style={styles.image} />

      <Text style={styles.title}>Maça</Text>
    </Pressable>
  )
}
