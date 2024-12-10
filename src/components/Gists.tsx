import { GistParsed } from "../declarations/github.gist";
import { Gist } from "./Gist";

interface Props {
  gists: Array<GistParsed>;
}

export const GistList = ({ gists }: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Gists</h1>
        <ul className="space-y-4">
          {gists.map((gist) => (
            <Gist key={Math.random()} gist={gist} />
          ))}
        </ul>
      </div>
    </div>
  );
};
