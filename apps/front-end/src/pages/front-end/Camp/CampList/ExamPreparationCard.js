import { FrontEndTypo } from "@shiksha/common-lib";
import { Stack, VStack } from "native-base";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ExamPreparationCard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <VStack
      bg="boxBackgroundColour.200"
      borderColor="btnGray.100"
      borderRadius="10px"
      borderWidth="1px"
      padding="4"
      shadow="AlertShadow"
    >
      <Stack space={4}>
        <FrontEndTypo.H3 color="textMaroonColor.400">
          {t("PREPARATION_FOR_EXAM")}
        </FrontEndTypo.H3>
        <FrontEndTypo.H4 color="textMaroonColor.400">
          {t("DO_YOU_KNOW_THE_EXAM_DATES")}
        </FrontEndTypo.H4>
        <FrontEndTypo.Secondarybutton
          onPress={(e) => navigate("/camps/exampreparation")}
        >
          {t("LIST_OF_LEARNERS")}
        </FrontEndTypo.Secondarybutton>
      </Stack>
    </VStack>
  );
};

export default ExamPreparationCard;
