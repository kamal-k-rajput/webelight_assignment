import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export const MoreDetails = () => {
  const [data, setData] = {};
  const dispatch = useDispatch();
  const repodata = useSelector((store) => {
    return store.moreDetails;
  });
  const allContributorsCommit = useSelector((store) => {
    return store.allContributorsCommit;
  });

  const options = {
    accessibility: {
      enabled: false,
    },
    title: {
      text: "Contributor Changes",
    },
    series: [
      {
        data: [3, 4, 5, 6],
      },
    ],
  };
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${repodata.owner.login}/${repodata.name}/stats/contributors`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
          console.log(data, "data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>MoreDetails</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {console.log(allContributorsCommit)}
    </div>
  );
};
