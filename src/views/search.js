import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import SearchHistoryList from '../components/search-history-list'
import SuggestionCard from '../components/suggestion-card'
import Box from '../components/box'
import HomeHeaderScreeen from '../components/homeHeaderScreen'

function SearchView({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item'
    }
  ]

  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const isFocused = useIsFocused()

  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {isFocused && (
        <StatusBar
          barStyle={isSearchFocus ? 'dark-content' : 'light-content'}
          backgroundColor={isSearchFocus ? '#F8F8F8' : '#E11E3C'}
        />
      )}
      {/* Header */}
      <HomeHeaderScreeen
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
      {/* Content */}
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.atasoz[0].madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
