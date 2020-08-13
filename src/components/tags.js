import React from 'react'
import { Dropdown, Form, Button} from 'semantic-ui-react'

const filter = (tags) => {
    const list = tags.map(tag => {
        return { key: tag.name, value: tag.name, text: tag.name };
    });
    return list;
};

const TagsList = (data) => (
  <Dropdown
    placeholder='Select Build'
    fluid
    search
    selection
    options={filter(data.tags)}
  />
)

export default TagsList
