import {
  Button,
  CircularProgress,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import styled from "styled-components";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Form, Formik, FastField } from "formik";
import React, { FunctionComponent, useEffect } from "react";
import Layout from "../components/layout";
import {
  CheckboxWithLabel as FormikCheckbox,
  Select as FormikSelect,
  TextField as FormikTextField,
} from "formik-material-ui";

const Container = styled.div`
  min-height: 300px;
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  & h1 {
    margin-bottom: 3rem;
  }
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(3),
      minWidth: 300,
    },
    buttonRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    formRow: {
      width: "100%",
    },
    buttonContainer: {
      display: "flex",
      marginTop: theme.spacing(2),
    },
    buttonGap: {
      marginRight: theme.spacing(2),
    },
    filter: {
      marginBottom: theme.spacing(1),
    },
    empty: {
      height: 36,
    },
  })
);

interface Props {}

const createChallenge: FunctionComponent<Props> = () => {
  const classes = useStyles();

  useEffect(() => {}, []);

  interface IInitialValues {
    title: string;
    description: string;
    test: { id: number; name: string; language: string }[];
    author: string;
  }

  const initialValues: IInitialValues = {
    title: "",
    description: "",
    test: [],
    author: "",
  };

  // if (dropdowns.length === 0) {
  //   return <CircularProgress />;
  // }

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      // validationSchema={validation}
      onSubmit={(values, formik) => {
        // handleSubmit(values);
        let filters: any[] = [];

        formik.setSubmitting(false);
      }}
      render={({ values, handleBlur, handleChange, setFieldValue }) => (
        <Layout pageName="About Us">
          <Container>
            <Form className={classes.form}>
              <FastField
                className={classes.filter}
                name="title"
                label="Title"
                margin="none"
                component={FormikTextField}
                fullWidth
              />
              <FastField
                className={classes.filter}
                name="description"
                label="Description"
                margin="none"
                component={FormikTextField}
                multiline
                fullWidth
              />
              <FastField
                className={classes.filter}
                name="author"
                label="Author"
                margin="none"
                component={FormikTextField}
                multiline
                fullWidth
              />
              <div className={classes.buttonContainer}>
                <Button className={classes.buttonGap} variant="contained">
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Submit Question
                </Button>
              </div>
            </Form>
          </Container>
        </Layout>
      )}
    />
  );
};

export default createChallenge;
