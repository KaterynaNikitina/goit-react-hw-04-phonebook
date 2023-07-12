import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Find contacts by name
            <Input
            type="text" 
            value={value}
            placeholder="enter name"            
            onChange={e => onChange(e.currentTarget.value)}>
            </Input>
        </Label>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

