import UserCard from "~/components/main/UserCard";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import { IProfile } from "~/types/types";

interface IProps {
  users: IProfile[];
}

const Users: React.FC<IProps> = ({ users }) => {
  useDocumentTitle(`Search Users | Social`);

  return (
    <div>
      {users.map((user) => (
        <div
          className="bg-white dark:bg-indigo-1100 rounded-md mb-4 divide-y divide-y-transparent dark:divide-gray-800"
          key={user._id}
        >
          <UserCard profile={user} isFollowing={user.isFollowing} />
        </div>
      ))}
    </div>
  );
};

export default Users;
