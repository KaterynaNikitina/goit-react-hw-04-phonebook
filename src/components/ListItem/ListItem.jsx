import PropTypes from 'prop-types';
import { Item, ItemBtn } from './ListItem.styled';

export const ListItem = ({ id, name, number, onClick}) => {
    return (
        <Item>
            {name}: {number}
            <ItemBtn onClick={() => onClick(id)}>Delete</ItemBtn>
        </Item>
    );
};

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

