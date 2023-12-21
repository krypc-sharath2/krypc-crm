// import { IResourceComponentsProps } from "@refinedev/core";
// import { MuiCreateInferencer } from "@refinedev/inferencer/mui";
//
// export const PillarCreate: React.FC<IResourceComponentsProps> = () => {
//   return <MuiCreateInferencer />;
// };
import { Create } from "@refinedev/mui";
import { Box, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { IResourceComponentsProps } from "@refinedev/core";
import { Controller } from "react-hook-form";

export const PillarCreate: React.FC<IResourceComponentsProps> = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
      <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
        <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column" }}
            autoComplete="off"
        >
          <TextField
              {...register("account_name", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.account_name}
              helperText={(errors as any)?.account_name?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Account Name"
              name="account_name"
          />
          <Controller
              control={control}
              name="web3-dApps"
              // eslint-disable-next-line
              defaultValue={null as any}
              render={({ field }) => (
                  <FormControlLabel
                      label="Web3 D Apps"
                      control={
                        <Checkbox
                            {...field}
                            checked={field.value}
                            onChange={(event) => {
                              field.onChange(event.target.checked);
                            }}
                        />
                      }
                  />
              )}
          />
          <Controller
              control={control}
              name="web3-SmartContract"
              // eslint-disable-next-line
              defaultValue={null as any}
              render={({ field }) => (
                  <FormControlLabel
                      label="Web3 Smart Contract"
                      control={
                        <Checkbox
                            {...field}
                            checked={field.value}
                            onChange={(event) => {
                              field.onChange(event.target.checked);
                            }}
                        />
                      }
                  />
              )}
          />
          <Controller
              control={control}
              name="web3-NFTs"
              // eslint-disable-next-line
              defaultValue={null as any}
              render={({ field }) => (
                  <FormControlLabel
                      label="Web3 NFTs"
                      control={
                        <Checkbox
                            {...field}
                            checked={field.value}
                            onChange={(event) => {
                              field.onChange(event.target.checked);
                            }}
                        />
                      }
                  />
              )}
          />
          {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}


        </Box>
      </Create>
  );
};
