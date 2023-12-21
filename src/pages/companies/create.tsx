// import { IResourceComponentsProps } from "@refinedev/core";
// import { MuiCreateInferencer } from "@refinedev/inferencer/mui";
//
// export const CompaniesCreate: React.FC<IResourceComponentsProps> = () => {
//   return <MuiCreateInferencer />;
// };


import { Create } from "@refinedev/mui";
import { Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { IResourceComponentsProps } from "@refinedev/core";

export const CompaniesCreate: React.FC<IResourceComponentsProps> = () => {
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
          <TextField
              {...register("sector", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.sector}
              helperText={(errors as any)?.sector?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Sector"
              name="sector"
          />
          <TextField
              {...register("industry_vertical", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.industry_vertical}
              helperText={(errors as any)?.industry_vertical?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Industry Vertical"
              name="industry_vertical"
          />
          <TextField
              {...register("sales_unit", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.sales_unit}
              helperText={(errors as any)?.sales_unit?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Sales Unit"
              name="sales_unit"
          />
          <TextField
              {...register("area", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.area}
              helperText={(errors as any)?.area?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Area"
              name="area"
          />
          <TextField
              {...register("industry", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.industry}
              helperText={(errors as any)?.industry?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Industry"
              name="industry"
          />
          <TextField
              {...register("subsidiary", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.subsidiary}
              helperText={(errors as any)?.subsidiary?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="text"
              label="Subsidiary"
              name="subsidiary"
          />
          {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
          <TextField
              {...register("createdAt", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.createdAt}
              helperText={(errors as any)?.createdAt?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              label="Created At"
              name="createdAt"
          />

          {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
          <TextField
              {...register("updatedAt", {
                required: "This field is required",
              })}
              error={!!(errors as any)?.updatedAt}
              helperText={(errors as any)?.updatedAt?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              label="Updated At"
              name="updatedAt"
          />
          <TextField
              {...register("__v", {
                required: "This field is required",
                valueAsNumber: true,
              })}
              error={!!(errors as any)?.__v}
              helperText={(errors as any)?.__v?.message}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="number"
              label="  V"
              name="__v"
          />
        </Box>
      </Create>
  );
};
