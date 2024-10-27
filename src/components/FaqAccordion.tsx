import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import "../App.css";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

const FaqAccordion = () => {
  const faqQuestions = [
    {
      value: "faq-1",
      question: "How easy is it to set up EduDesks?",
      answer:
        "Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.",
    },
    {
      value: "faq-2",
      question: "Can I track income and expenses?",
      answer:
        "Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.",
    },
    {
      value: "faq-3",
      question: "Can I edit payment details after setting them up?",
      answer:
        "Yes, you can easily modify employee payment details and schedules whenever needed.",
    },
    {
      value: "faq-4",
      question: "Can parents pay school fees into the website",
      answer:
        "Currently, the platform does not support fee collection. However, you can manage and track school fees by entering the income manually.",
    },
    {
      value: "faq-5",
      question: "What happens if the wallet runs out of funds?",
      answer:
        "If your wallet runs low, you will be notified, and you can quickly top it up to continue making payments without interruption.",
    },
    {
      value: "faq-6",
      question: "How do I pay staff salaries?",
      answer:
        "You can pay staff salaries directly from the platform by funding your wallet, entering employee details, or directly from their profile.",
    },
  ];
  return (
    <>
      <AccordionRoot collapsible variant={"plain"} display={'flex'} flexDirection={'column'} gap={8}>
        {faqQuestions.map((faq, index) => (
          <AccordionItem key={index} value={faq.value} paddingBlockStart={index === 0 ? 0 : 6} display={'flex'} flexDirection={'column'} gap={2}>
            <AccordionItemTrigger
              className="accordionTrigger"
              color={"brand.text1"}
              fontWeight={"semibold"}
              fontSize={"lg"}
              lineHeight={"1.75rem"}
              padding={'unset'}
            >
              <HStack
                width={"full"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap="1"
              >
                <Text>{faq.question}</Text>
                <Image className="plus-icon" as={HiOutlinePlusCircle} />
                <Image className="minus-icon" as={HiOutlineMinusCircle} />
              </HStack>
            </AccordionItemTrigger>
            <AccordionItemContent padding={'unset'} color={'brand.grey'} maxWidth={'45rem'}>{faq.answer}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
};

export default FaqAccordion;
