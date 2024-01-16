import React, { useState } from "react";
import {
  Box,
  Center,
  Stack,
  ScrollView,
  HStack,
  Button,
  Modal,
  Image,
} from "native-base";
import getWindowSize from "v2/utils/Helper/JSHelper";
import { IconByName, BodyLarge } from "@shiksha/common-lib";
import LanguageChange from "../../../assets/Images/Icon/LanguageChange.png";

export default function PageHeader({
  t,
  showHelpButton,
  funBackButton,
  showLangChange,
  funLangChange,
}) {
  const [width, height] = getWindowSize();
  const [helpModal, setHelpModal] = useState(false);
  return (
    <Box
      style={{ height: 60 }}
      shadow={5}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={4}
    >
      <Button
        py="1"
        px="1"
        variant="greyOutlineBtn"
        onPress={() => funBackButton()}
      >
        <IconByName size="sm" name="ArrowLeftSLineIcon" />
      </Button>
      {showLangChange ? (
        <Button
          py="1"
          px="2"
          variant="noOutlineBtn"
          _text={{
            fontSize: "10px",
          }}
          onPress={() => funLangChange()}
        >
          <Image
            source={{
              uri: LanguageChange,
            }}
            alt="Language Change"
            width={"30px"}
            height={"30px"}
          />
        </Button>
      ) : (
        <React.Fragment />
      )}
      {showHelpButton ? (
        <>
          <Button
            py="1"
            px="2"
            variant="redOutlineBtn"
            _text={{
              fontSize: "10px",
            }}
            onPress={() => setHelpModal(true)}
          >
            {t("HELP")}
          </Button>
          <Modal
            isOpen={helpModal}
            onClose={() => setHelpModal(false)}
            size="xl"
            avoidKeyboard
            justifyContent="flex-end"
            bottom="4"
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header p="5" fontSize="16" borderBottomWidth="0">
                {t("NEED_HELP")}
              </Modal.Header>
              <Modal.Body p="5" pb="10" overflowX="auto">
                <HStack space="3" align-items="stretch">
                  {[
                    {
                      icon: "MessageLineIcon",
                      name: "FREQUENTLY_ASKED_QUESTION",
                    },
                    {
                      icon: "CustomerService2LineIcon",
                      name: "CALL_SUPPORT",
                    },
                    { icon: "CellphoneLineIcon", name: "CALL_MY_IP" },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      p="4"
                      flex="1"
                      borderWidth="1"
                      borderColor="coolGray.500"
                      rounded="lg"
                      bg="textGreyColor.400"
                      alignItems="center"
                      gap="10px"
                    >
                      <IconByName
                        color="coolGray.500"
                        name={item?.icon}
                        isDisabled
                      />
                      <BodyLarge color="coolGray.500" textAlign="center">
                        {t(item?.name)}
                      </BodyLarge>
                    </Box>
                  ))}
                </HStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </>
      ) : (
        <React.Fragment />
      )}
    </Box>
  );
}
