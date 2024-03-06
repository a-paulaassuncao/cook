import { View, Text, ScrollView } from "react-native"

import { styles } from "@/app/styles"

import Ingredient from "@/components/Ingredient"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView horizontal contentContainerStyle={styles.ingredients}>
        {Array.from({ length: 100 }).map(() => (
          <Ingredient />
        ))
        }
      </ScrollView>
    </View>
  )
}
