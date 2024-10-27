import { VStack, Heading, Text, HStack } from "@chakra-ui/react";
import FaqAccordion from "../components/FaqAccordion";
import FaqCard from "../components/FaqCard";


const FaqSection = () => {
    return (
        <>
        <VStack alignItems={'flex-start'} gap={'3.75rem'}>
            {/* ======== heading ======== */}
            <VStack gap={'0.9375rem'} fontFamily={'Inter'} color={'brand.grey'}>
                <Heading fontSize={'4xl'} fontWeight={'semibold'} lineHeight={'2.75rem'} color={'brand.text1'} letterSpacing={'-.72px'}>Frequently Asked Questions</Heading>
                <Text fontSize={'1.25rem'} lineHeight={'1.875rem'}>Popular questions asked about Edudesk</Text>
            </VStack>
            {/* ======== faq accordion and card ======== */}
            <HStack gap={'3.375rem'} width={'100%'} alignItems={'flex-start'}>
            <FaqAccordion />
            <FaqCard />
            </HStack>
        </VStack>
        </>
    )
}

export default FaqSection;