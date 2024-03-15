import { ContainerUserCard } from "./style";

type Props = {
    name: string;
    username: string;
    phone: string;
    email: string;
    website: string;
}

export function UserCard({name, username, phone, email, website}: Props) {
  return (
    <ContainerUserCard>
      <strong>Nome: {name}</strong>
      <strong> aka {username}</strong>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
    </ContainerUserCard>
  );
}
