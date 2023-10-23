import { Controller, useForm } from "react-hook-form";
import { Form, Col, Row, Button } from "react-bootstrap";
function FormDemo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      age: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Controller
              name="firstname"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.firstname}
                  type="text"
                  {...field}
                  placeholder="First name"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              First Name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Age</Form.Label>
            <Controller
              name="age"
              control={control}
              rules={{ required: true, max: 30, min: 20 }}
              render={({ field }) => (
                <Form.Control
                  isInvalid={errors.age}
                  type="text"
                  {...field}
                  placeholder="Age"
                />
              )}
            />
            {errors.age?.type == "required" && (
              <Form.Control.Feedback type="invalid">
                Age is required.
              </Form.Control.Feedback>
            )}
            {errors.age?.type == "min" && (
              <Form.Control.Feedback type="invalid">
                Min age is 20.
              </Form.Control.Feedback>
            )}
            {errors.age?.type == "max" && (
              <Form.Control.Feedback type="invalid">
                Max age is 30.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}

export default FormDemo;
