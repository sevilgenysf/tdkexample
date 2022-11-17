import React from 'react'
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'
import Text from '../components/text'
import ActionButton, { ActionButtonTitle } from '../components/action-buton'
import { Sound, Hand, Fav } from '../components/icons'
import theme from '../utils/theme'
import DetailSummaryItemContainer from '../components/detail-summary-item'
import LoaderText from '../components/LoaderText'

function DetailView({ route }) {
  const keyword = route.params?.keyword
  const [data, setData] = React.useState(null)
  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
    console.log(data[0].anlamlarListe)
  }

  React.useEffect(() => {
    getDetailData()
  }, [])
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1} p={16}>
      {isFocused && (
        <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      )}
      <Box as={ScrollView} showsVerticalScrollIndicator={false}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.madde_duz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.madde_duz}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data} mr={10}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data}>
            <Fav color={theme.colors.textLight} width={24} height={24} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={40}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItemContainer
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map((index) => (
                <DetailSummaryItemContainer border={index !== 1} key={index}>
                  <LoaderText />
                  <LoaderText width={250} mt={10} />
                </DetailSummaryItemContainer>
              ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
