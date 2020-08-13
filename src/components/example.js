import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormExampleFieldControlId = () => (
  <Form>
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
)

export default FormExampleFieldControlId

