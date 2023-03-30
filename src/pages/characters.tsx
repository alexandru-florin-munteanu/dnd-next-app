import React from "react";
import { GetServerSideProps } from "next";
import { Container, Table, Row } from "react-bootstrap";
// import { getServerSession } from "next-auth/next";
import WFImageCarousel from "components/image-carousel/WFImageCarousel";

interface Character {
  id: number;
  name: string;
  player_name: string;
  race: string;
  class_name: string;
  level: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hit_points: number;
  armor_class: number;
  speed: number;
  initiative_bonus: number;
  proficiency_bonus: number;
  weapons: string;
  armor: string;
  items: string;
  spell_slots: string;
  spell_list: string;
  background: string;
  alignment: string;
  experience_points: number | null;
}

interface CharactersProps {
  characters: Character[];
}

const carouselImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const Characters: React.FC<CharactersProps> = ({ characters }) => {
  return (
    <Container className="characters-container">
      <Row className="heading-spacing">
        <h1 className="characters-title">Characters</h1>
      </Row>

      <Row className="row-spacing">
        <Container>
          <WFImageCarousel images={carouselImages} />
        </Container>
      </Row>
      <Row className="row-spacing">
        <Table className="characters-table" striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Player Name</th>
              <th>Race</th>
              <th>Class</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {characters.length !== 0 ? (
              characters.map((character) => (
                <tr key={character.id}>
                  <td>{character.name}</td>
                  <td>{character.player_name}</td>
                  <td>{character.race}</td>
                  <td>{character.class_name}</td>
                  <td>{character.level}</td>
                </tr>
              ))
            ) : (
              <h2>No characters to display yet</h2>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { data: session } = await getServerSession(context.req);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/sign-in",
  //       permanent: false,
  //     },
  //   };
  // }

  try {
    // const response = await fetch("http://localhost:3000/api/characters", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${session.accessToken}`,
    //   },
    // });

    // const response

    // if (!response.ok) {
    //   throw new Error(`HTTP ${response.status} ${response.statusText}`);
    // }

    // const characters = await response.json();
    const characters = [
      {
        id: 1,
        name: "Gandalf",
        player_name: "Alex",
        race: "Demigod",
        class_name: "Wizard",
        level: 99,
        strength: 99,
        dexterity: 99,
        constitution: 99,
        intelligence: 99,
        wisdom: 99,
        charisma: 99,
        hit_points: 99,
        armor_class: 99,
        speed: 99,
        initiative_bonus: 99,
        proficiency_bonus: 99,
        weapons: "staff, sword, power orb",
        armor: "Elven Mithril",
        items: "health potions, enchanted scrolls, cursed items",
        spell_slots: "fireball, frostburst, elder breath",
        spell_list: "fireball, frostburst, elder breath",
        background: "The beginnings",
        alignment: "Neutrally good",
        experience_points: 99,
      },
      {
        id: 2,
        name: "Actual DnD Wizard",
        player_name: "Alex",
        race: "Fragile Human",
        class_name: "Wizard",
        level: 1,
        strength: 9,
        dexterity: 12,
        constitution: 15,
        intelligence: 26,
        wisdom: 36,
        charisma: 5,
        hit_points: 10,
        armor_class: 1,
        speed: 0.5,
        initiative_bonus: 99,
        proficiency_bonus: 99,
        weapons: "staff",
        armor: "Leather Tunic",
        items: "half-torn map",
        spell_slots: "lightfeet",
        spell_list: "Speed-up",
        background: "Novice plains",
        alignment: "Completely off",
        experience_points: 1,
      },
    ];

    return {
      props: { characters },
    };
  } catch (error) {
    console.error("Error fetching characters:", error);

    return {
      notFound: true,
    };
  }
};

export default Characters;
