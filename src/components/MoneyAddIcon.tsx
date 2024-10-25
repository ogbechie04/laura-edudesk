import { Box, HStack, Image } from "@chakra-ui/react";
import moneyAdd from "../assets/money-add.svg";

const MoneyAddIcon = () => {
  return (
    <HStack>
      <Box backgroundColor={'brand.background'} padding={'0.3925rem'} borderRadius={'full'}>
        <Image src={moneyAdd} paddingBlock={'0.12rem'} paddingInline={'0.08rem'} />
      </Box>
    </HStack>
  );
};

export default MoneyAddIcon;
