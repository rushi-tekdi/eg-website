import React from "react";
import {
  HStack,
  VStack,
  Text,
  Box,
  Progress,
  Divider,
  Button,
  Modal,
} from "native-base";
import {
  AdminTypo,
  FrontEndTypo,
  H1,
  H3,
  IconByName,
  Layout,
  benificiaryRegistoryService,
  t,
} from "@shiksha/common-lib";
import CustomRadio from "component/CustomRadio";
import { useParams } from "react-router-dom";
import Chip from "component/Chip";

const dropoutReasons = [
  {
    label: "Family issue",
    value: "Family issue",
  },
  {
    label: "Community Issue",
    value: "Community Issue",
  },
  {
    label: "Getting Married",
    value: "Getting Married",
  },
  {
    label: "Personal Reasons",
    value: "Personal Reasons",
  },
  {
    label: "Moving away",
    value: "Moving away",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const reactivateReasons = [
  {
    label: "Career Aspirations",
    value: "Career Aspirations",
  },
  {
    label: "Convinced by Prerak",
    value: "Convinced by Prerak",
  },
  {
    label: "Moved back",
    value: "Moved back",
  },
  {
    label: "Issue Resolved",
    value: "Issue Resolved",
  },
  {
    label: "Changed Mind",
    value: "Changed Mind",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export default function AgLearnerProfileView(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [reactivatemodalVisible, setreactivateModalVisible] =
    React.useState(false);
  const [reasonValue, setReasonValue] = React.useState("");
  const [reactivateReasonValue, setReactivateReasonValue] = React.useState("");
  React.useEffect(() => {
    const getData = async () => {
      let data = await benificiaryRegistoryService.getOne(id);
      setBenificiary(data);
    };

    getData();
  }, []);
  const { id } = useParams();
  const [benificiary, setBenificiary] = React.useState({});
  const dropoutApiCall = async () => {
    let bodyData = {
      id: id,
      status: "dropout",
      reason_for_status_update: reasonValue,
    };
    const result = await benificiaryRegistoryService.statusUpdate(bodyData);
    if (result) {
      setReasonValue("");
      setModalVisible(false);
    }
  };

  const reactivateApiCall = async () => {
    let bodyData = {
      id: id,
      status: "activate",
      reason_for_status_update: reactivateReasonValue,
    };
    const result = await benificiaryRegistoryService.statusUpdate(bodyData);
    if (result) {
      setReactivateReasonValue("");
      setreactivateModalVisible(false);
    }
  };

  return (
    <Layout _appBar={{ name: t("AG_LEARNER_PROFILE") }}>
      <VStack paddingBottom="64px" bg="bgGreyColor.200">
        <VStack paddingLeft="16px" paddingRight="16px" space="24px">
          <VStack alignItems="Center">
            <IconByName
              name="AccountCircleLineIcon"
              color="textGreyColor.200"
              _icon={{ size: "80" }}
            />
            <FrontEndTypo.H2 bold color="textMaroonColor.400">
              {benificiary?.result?.first_name}
              {benificiary?.result?.last_name &&
                ` ${benificiary?.result?.last_name}`}
            </FrontEndTypo.H2>
            <Box>{benificiary?.result?.[0]?.status || "unidentified"}</Box>
          </VStack>
          <Box
            bg="boxBackgroundColour.100"
            borderColor="btnGray.100"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <FrontEndTypo.H3 bold color="textGreyColor.800">
                {t("PROFILE_DETAILS")}
              </FrontEndTypo.H3>
              <Box paddingTop="2">
                <Progress value={45} size="xs" colorScheme="info" />
              </Box>
              <VStack space="2" paddingTop="5">
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack space="md" alignItems="Center">
                    <IconByName name="UserLineIcon" _icon={{ size: "20" }} />

                    <FrontEndTypo.H3>{t("BASIC_DETAILS")}</FrontEndTypo.H3>
                  </HStack>

                  <IconByName
                    name="ArrowRightSLineIcon"
                    color="textMaroonColor.400"
                  />
                </HStack>
                <Divider
                  orientation="horizontal"
                  bg="btnGray.100"
                  thickness="1"
                />
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack alignItems="Center" space="md">
                    <IconByName name="MapPinLineIcon" _icon={{ size: "20" }} />

                    <FrontEndTypo.H3 color="textGreyColor.800">
                      {t("ADD_YOUR_ADDRESS")}
                    </FrontEndTypo.H3>
                  </HStack>
                  <IconByName
                    name="ArrowRightSLineIcon"
                    color="textMaroonColor.400"
                  />
                </HStack>
                <Divider
                  orientation="horizontal"
                  bg="btnGray.100"
                  thickness="1"
                />
                <HStack alignItems="Center" justifyContent="space-between">
                  <HStack alignItems="Center" space="md">
                    <IconByName name="AddLineIcon" _icon={{ size: "20" }} />

                    <FrontEndTypo.H3 color="textGreyColor.800">
                      {t("AADHAAR_DETAILS")}
                    </FrontEndTypo.H3>
                  </HStack>

                  <IconByName
                    name="ArrowRightSLineIcon"
                    color="textMaroonColor.400"
                  />
                </HStack>
              </VStack>
            </VStack>
          </Box>

          <Box
            bg="boxBackgroundColour.100"
            borderColor="btnGray.100"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <FrontEndTypo.H3 color="textGreyColor.800" bold>
                  {t("DOCUMENT_CHECKLIST")}
                </FrontEndTypo.H3>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="textMaroonColor.400"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="boxBackgroundColour.100"
            borderColor="btnGray.100"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <FrontEndTypo.H3 color="textGreyColor.800" bold>
                  {t("ENROLLMENT_DETAILS")}
                </FrontEndTypo.H3>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="#790000"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="boxBackgroundColour.100"
            borderColor="btnGray.100"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <FrontEndTypo.H3 color="textGreyColor.800" bold>
                  {t("CAMP_DETAILS")}
                </FrontEndTypo.H3>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="textMaroonColor.400"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          <Box
            bg="boxBackgroundColour.100"
            borderColor="btnGray.100"
            borderRadius="10px"
            borderWidth="1px"
            paddingBottom="24px"
          >
            <VStack paddingLeft="16px" paddingRight="16px" paddingTop="16px">
              <HStack justifyContent="space-between" alignItems="Center">
                <FrontEndTypo.H3 color="textGreyColor.800" bold>
                  {t("JOURNEY_IN_PROJECT_PRAGATI")}
                </FrontEndTypo.H3>
                <IconByName
                  name="ArrowRightSLineIcon"
                  color="textMaroonColor.400"
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>
          <FrontEndTypo.Disablebutton
            onPress={() => {
              setModalVisible(true);
            }}
            leftIcon={<IconByName name="UserUnfollowLineIcon" isDisabled />}
          >
            {t("MARK_AS_DROPOUT")}
          </FrontEndTypo.Disablebutton>
          <FrontEndTypo.DisableOutlinebutton
            onPress={() => {
              setreactivateModalVisible(true);
            }}
          >
            {t("AG_PROFILE_REACTIVATE_AG_LEARNER")}
          </FrontEndTypo.DisableOutlinebutton>
        </VStack>
      </VStack>
      <Modal
        isOpen={modalVisible}
        safeAreaTop={true}
        p="0"
        m="0"
        size="xl"
        _backdrop={{ opacity: "0.7" }}
      >
        <Modal.Content
          maxWidth="350"
          style={{ marginBottom: 0, marginTop: "auto" }}
        >
          <Modal.Header p="5" borderBottomWidth="0">
            <FrontEndTypo.H1 bold color="textGreyColor.450">
              {t("AG_PROFILE_ARE_YOU_SURE")}
            </FrontEndTypo.H1>
            <FrontEndTypo.H2 color="textGreyColor.450">
              {t("AG_PROFILE_DROPOUT_MESSAGE")}{" "}
            </FrontEndTypo.H2>
          </Modal.Header>
          <Modal.Body pb="10">
            <FrontEndTypo.H2 color="textGreyColor.200" pb="4" pl="2">
              {t("AG_PROFILE_REASON_MEASSGAE")}{" "}
            </FrontEndTypo.H2>
            <VStack space="5">
              <VStack space="2" bg="gray.100" p="1" rounded="lg" w="100%">
                <VStack alignItems="center" space="1" flex="1">
                  <CustomRadio
                    options={{ enumOptions: dropoutReasons }}
                    schema={{ grid: 2 }}
                    value={reasonValue}
                    onChange={(e) => {
                      setReasonValue(e);
                    }}
                  />
                </VStack>
              </VStack>
              <VStack space="5" pt="5">
                <FrontEndTypo.Disablebutton
                  flex={1}
                  onPress={() => {
                    dropoutApiCall();
                  }}
                >
                  {t("MARK_AS_DROPOUT")}
                </FrontEndTypo.Disablebutton>
                <FrontEndTypo.DisableOutlinebutton
                  flex={1}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  {t("CANCEL")}
                </FrontEndTypo.DisableOutlinebutton>
              </VStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={reactivatemodalVisible}
        safeAreaTop={true}
        size="xl"
        _backdrop={{ opacity: "0.7" }}
      >
        <Modal.Content
          maxWidth="350"
          style={{ marginBottom: 0, marginTop: "auto" }}
        >
          <Modal.Header p="5" borderBottomWidth="0">
            <FrontEndTypo.H1 bold color="textGreyColor.450">
              {t("AG_PROFILE_ARE_YOU_SURE")}
            </FrontEndTypo.H1>
            <FrontEndTypo.H2 color="textGreyColor.450">
              {t("AG_PROFILE_REACTIVAYE_MESSAGE")}{" "}
            </FrontEndTypo.H2>
          </Modal.Header>
          <Modal.Body pb="10">
            <FrontEndTypo.H2 color="textGreyColor.200" pb="4" pl="2">
              {t("AG_PROFILE_REACTIVATE_REASON_MEASSGAE")}{" "}
            </FrontEndTypo.H2>
            <VStack space="5">
              <VStack space="2" bg="gray.100" p="1" rounded="lg">
                <VStack alignItems="center" space="1" flex="1">
                  <CustomRadio
                    options={{ enumOptions: reactivateReasons }}
                    schema={{ grid: 2 }}
                    value={reactivateReasonValue}
                    onChange={(e) => {
                      setReactivateReasonValue(e);
                    }}
                  />
                </VStack>
              </VStack>
              <VStack space="3">
                <FrontEndTypo.Disablebutton
                  flex={1}
                  onPress={() => {
                    reactivateApiCall();
                  }}
                >
                  {t("AG_PROFILE_REACTIVATE_AG_LEARNER")}
                </FrontEndTypo.Disablebutton>
                <FrontEndTypo.DisableOutlinebutton
                  flex={1}
                  onPress={() => {
                    setreactivateModalVisible(false);
                  }}
                >
                  {t("CANCEL")}
                </FrontEndTypo.DisableOutlinebutton>
              </VStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Layout>
  );
}
