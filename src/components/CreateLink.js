import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { FEED_QUERY } from "./LinkList";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink = props => {
  const [state, setState] = useState({
    description: "",
    url: ""
  });

  const { description, url } = state;

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={e => setState({ ...state, description: e.target.value })}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={e => setState({ ...state, url: e.target.value })}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={() => props.history.push("/")}
        update={(store, { data: { post } }) => {
          const data = store.readQuery({ query: FEED_QUERY });
          data.feed.links.unshift(post);
          store.writeQuery({
            query: FEED_QUERY,
            data
          });
        }}
      >
        {postMutation => <button onClick={postMutation}>Submit</button>}
      </Mutation>
    </div>
  );
};

export default CreateLink;
