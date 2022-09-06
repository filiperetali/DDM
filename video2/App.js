import { View, Text } from "react-native";
import Detalhes from "./sources/telas/Carrinho/Detalhes";
import Topo from "./sources/telas/Carrinho/Topo";
import Mocks from "./sources/mocks/carrinho";

export default function App(){
  return(
    <View>
      <Text>Principal</Text>
      <Topo {...Mocks.topo}/>
      <Detalhes {...Mocks.detalhes}/>
    </View>
  )
}