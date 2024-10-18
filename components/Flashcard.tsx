import { Card, CardBody } from "@nextui-org/react";

const Flashcard = ({
  flashcard,
  side,
  setSide,
}: {
  flashcard: Flashcard;
  side: "term" | "definition";
  setSide: (side: "term" | "definition") => void;
}) => {
  return (
    <Card
      onClick={() =>
        side === "term" ? setSide("definition") : setSide("term")
      }
      className="w-2/3 h-3/5"
    >
      <CardBody className="flex flex-col justify-center items-center cursor-pointer">
        {side === "term" ? (
          <p>{flashcard.term}</p>
        ) : (
          <p>{flashcard.definition}</p>
        )}
      </CardBody>
    </Card>
  );
};

export default Flashcard;
