import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import BookIcon from '@material-ui/icons/Book'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled'
const DashboardCard = [
  {
    id: 1,
    count: '7510',
    text: 'Total Student',
    icon: <PermIdentityIcon />
		// icon: "<GroupIcon />",
  },
  {
    id: 2,
    count: '7000',
    text: 'Book Available',
    icon: <LibraryBooksIcon />
		// icon: "<GroupIcon />",
  },
  {
    id: 3,
    count: '154',
    text: 'Book Borrowed',
    icon: <BookIcon />
		// icon: "<GroupIcon />",
  },
  {
    id: 4,
    count: '21',
    text: 'Overdue Books',
    icon: <LibraryBooksIcon />
		// icon: "<GroupIcon />",
  },
  {
    id: 5,
    count: '63',
    text: 'Inactive Student',
    icon: <PersonAddDisabledIcon />
		// icon: "<GroupIcon />",
  },
  {
    id: 6,
    count: '52',
    text: 'Activation Request',
    icon: <PeopleAltIcon />
		// icon: "<GroupIcon />",
  }
]

export default DashboardCard
