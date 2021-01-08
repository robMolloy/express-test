import React from "react";
import Input from "../../generic/fields/Input";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";

import * as yup from "yup";
import "yup-phone";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import ButtonRow from "../../generic/grids/ButtonRow";

const Schema = yup.object().shape({
  con_first_name: yup.string().required("First name is a required field"),
  con_last_name: yup.string().required("First name is a required field"),
  con_email: yup
    .string()
    .required("Email address is a required field")
    .email("Must be an email address"),
  con_email_confirm: yup
    .string()
    .required("Email address is a required field")
    .email("Must be an email address")
    .oneOf([yup.ref("con_email"), null], "Email address does not match"),
  con_phone: yup
    .string()
    .phone("Must be a valid phone number")
    .required("Phone number is a required field"),
  con_phone_confirm: yup
    .string()
    .phone("Must be a valid phone number")
    .required("Phone number is a required field")
    .oneOf([yup.ref("con_phone"), null], "Phone number does not match"),
  con_booking_ref: yup
    .string()
    .required("Booking reference is required")
    .matches("^CPT"),
  con_details: yup.string(),
});

const ContactUsForm = () => {
  const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });
  const [success, setSuccess] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await form.trigger("lastName");
    if (result) {
      setFormValues(form.getValues());
      setSuccess(true);
    }
  };

  const getFormProps = ({ name }) => {
    return {
      ref: form.register,
      error: !!form.errors[name],
      helperText: form.errors?.[name]?.message,
      name: name,
    };
  };

  return (
    <SectionLightBg>
      <Container>
        <br />

        {success && (
          <>
            <Title size="2">
              This Form doesn't actually do anything, but here's your data in a
              table.
            </Title>
            <br />
            <GridContainer spacing={2}>
              {Object.entries(formValues).map(([label, value]) => {
                return (
                  <React.Fragment key={label}>
                    <GridItem xs={12} sm={3}>
                      {label}
                    </GridItem>
                    <GridItem xs={12} sm={9}>
                      {value}
                    </GridItem>
                  </React.Fragment>
                );
              })}
            </GridContainer>
          </>
        )}
        {!success && (
          <>
            <Title size="2">
              If your question hasn't been answered, please fill out the form
              below
            </Title>
            <br />
            <form noValidate onSubmit={async (e) => onSubmit(e)}>
              <GridContainer spacing={2}>
                <GridItem xs={12} sm={6}>
                  <Input
                    label="First Name *"
                    {...getFormProps({ name: "con_first_name" })}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Input
                    label="Last Name *"
                    {...getFormProps({ name: "con_last_name" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Email Address *"
                    helperText="Email used for the booking"
                    {...getFormProps({ name: "con_email" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Confirm Email Address *"
                    {...getFormProps({ name: "con_email_confirm" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Mobile Number *"
                    {...getFormProps({ name: "con_phone" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Confirm Mobile Number *"
                    {...getFormProps({ name: "con_phone_confirm" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Express Test Booking Reference *"
                    placeholder="Booking reference for primary person (will begin with 'CPT')."
                    {...getFormProps({ name: "con_booking_ref" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    label="Please share any more details that are relevant to your case"
                    {...getFormProps({ name: "con_details" })}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <ButtonRow
                    array={[
                      <ButtonPrimary type="submit">Submit</ButtonPrimary>,
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </>
        )}
        <br />
      </Container>
    </SectionLightBg>
  );
};

export default ContactUsForm;
