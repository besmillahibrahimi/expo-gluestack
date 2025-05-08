import { VStack } from "@/components/ui/vstack";
import { SignInSchema } from "./_FormSchema";

import SubmitButton from "@/components/SubmitButton";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { SignInSchemaType } from "./_FormSchema";

export default function SignInForm() {
  const [pending, startTransition] = useTransition();
  const { t } = useTranslation("auth");

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInSchemaType) => {
    startTransition(() => {
      // signIn(data);
    });
  };

  return (
    <VStack>
      <Controller
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormControl
            isInvalid={false}
            size="md"
            isDisabled={false}
            isReadOnly={false}
            isRequired={false}
          >
            <FormControlLabel>
              <FormControlLabelText>{t("email")}</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                type="text"
                placeholder={t("email")}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>{t("email")}</FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon />
              <FormControlErrorText>{t("email")}</FormControlErrorText>
            </FormControlError>
          </FormControl>
        )}
      />
      <Controller
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormControl
            isInvalid={false}
            size="md"
            isDisabled={false}
            isReadOnly={false}
            isRequired={false}
          >
            <FormControlLabel>
              <FormControlLabelText>{t("password")}</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                type="password"
                placeholder={t("password")}
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>{t("password")}</FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon />
              <FormControlErrorText>{t("password")}</FormControlErrorText>
            </FormControlError>
          </FormControl>
        )}
      />

      <SubmitButton isLoading={pending}>{t("signin")}</SubmitButton>
    </VStack>
  );
}
