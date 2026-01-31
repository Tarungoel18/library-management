import { useEffect, useState } from "react";
import { getAvatar } from "./service";
import "./user-card.css";

const UserCard = ({ user }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const res = await getAvatar(user?.username);
        setAvatar(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (user?.username) {
      fetchAvatar();
    }
  }, [user.username]);

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm text-center">
        <div className="card-body d-flex flex-column">
          <div
            className="mx-auto mb-3 avatar"
            dangerouslySetInnerHTML={{ __html: avatar }}
          />

          <h5 className="card-title">{user?.name}</h5>

          <p className="card-text mb-1">
            <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </p>

          <p className="card-text mb-1">{user?.phone}</p>

          <p className="card-text mb-1">{user?.company?.name}</p>

          <p className="card-text mb-1">
            <a href={`https://${user?.website}`} target="_blank">
              {user?.website}
            </a>
          </p>

          <p className="card-text text-muted small mt-auto">
            {user?.address?.street}, {user?.address?.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
