import React from 'react'
import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Box from '../components/box'
import Text from '../components/text'
import ActionButton, { ActionButtonTitle } from '../components/action-buton'
import { Favsolid, Sound, Hand } from '../components/icons'
import theme from '../utils/theme'
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary
} from '../components/detail-summary-item'

function DetailView() {
  const isFocused = useIsFocused()
  return (
    <Box as={SafeAreaView} flex={1} p={16}>
      {isFocused && (
        <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      )}
      <Box as={ScrollView} showsVerticalScrollIndicator={false}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Detay
          </Text>
          <Text color="textLight" mt={6}>
            Arapça kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton mr={10}>
            <Favsolid color={theme.colors.red} width={24} height={24} />
          </ActionButton>
          <ActionButton>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={40}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>
              Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
            </DetailSummaryItemTitle>
            <DetailSummaryItemSummary>
              "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
              Atay
            </DetailSummaryItemSummary>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
