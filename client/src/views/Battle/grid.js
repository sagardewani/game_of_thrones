import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Container, Image, ProgressBar, Button } from "react-bootstrap";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { getSearchedBattle } from "actions/search";
import crown from "assets/crown.svg";
import sword from "assets/sword.svg";
import ax from "assets/axes.svg";
import { GiCaduceus, GiDeathSkull, GiRank3, GiThorHammer, GiSun, GiSnowflake1 } from "react-icons/gi";
import win from "assets/win.jpg";
import loss from "assets/loss.jpg";
import bg from "assets/bg.jpg";

const loaderCSS = css`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
`;

const bgCard = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPositionX: 'center',
  paddingBottom: 15
};

const winBg = {
  backgroundImage: `url(${win})`,
  backgroundSize: 'cover'
};

const lossBg = {
  backgroundImage: `url(${loss})`,
  backgroundSize: 'cover'
}

const arrToString = (names) => {
  names = names.filter(name => !!name);
  const nameString = names.join(",");
  return nameString;
}

const Grid = ({
  battle_id,
  selectedBattle,
  loading,
  getSearchedBattle,
}) => {
  
  const initialData = {
    name: "",
    year: "",
    battle_number: 0,
    attacker_king: "",
    defender_king: "",
    attacker_1: "",
    attacker_2: "",
    attacker_3: "",
    attacker_4: "",
    defender_1: "",
    defender_2: "",
    defender_3: "",
    defender_4: "",
    attacker_outcome: "",
    battle_type: "",
    major_death: 0,
    major_capture: 0,
    attacker_size: 0,
    defender_size: 0,
    attacker_commander: "",
    defender_commander: "",
    summer: 0,
    location: "",
    region: "",
    note: "",
  };

  const [data, setData] = useState(initialData);
  const [progress, setProgress] = useState(0);
  const [fightInProgress, setFight] = useState(false);
  const [timer, setTimer] = useState(null);
  const [outcome, setOutcome] = useState(null);

  const {
    name,
    year,
    battle_number,
    attacker_king,
    defender_king,
    attacker_1,
    attacker_2,
    attacker_3,
    attacker_4,
    defender_1,
    defender_2,
    defender_3,
    defender_4,
    attacker_outcome,
    battle_type,
    major_death,
    major_capture,
    attacker_size,
    defender_size,
    attacker_commander,
    defender_commander,
    summer,
    location,
    region,
    note
  } = data;

  const resetFight = () => {
    setFight(false);
    setProgress(0);
    if(timer) clearInterval(timer);
  }


  const fightProgress = () => {
    let initialProgress = 0;
    setTimer(setInterval(function() {
      initialProgress += 10;
      setProgress(initialProgress);
      if(initialProgress >= 100) {
        setOutcome( attacker_outcome === "win" ? "attacker": "defender");
        resetFight();
      }
    }, 1000));
  }

  const startFight = () => {
    setFight(true);
    fightProgress();
  }

  useMemo(() => {
    resetFight();
    setOutcome(null);
    if(battle_id) getSearchedBattle(battle_id);
  }, [getSearchedBattle, battle_id]);

  useEffect(() => {
    let subscribe = true;
    async function asyncCall() {
      if(subscribe && selectedBattle) {
        setData({
          ...selectedBattle,
        });
      }
    }
    asyncCall();
    return () => subscribe = false;
  }, [selectedBattle]);

  return (
    <section className="sptb p-2">    
      <Container>
      {
        !battle_id ? (
          <Row>
            <Col md={10} className="m-auto">
              <h3>Please Search for a battle...</h3>
            </Col>
          </Row>
        ): (
            <Row>
              <Col md={10} className="m-auto">
                <div className="p-2">
                  <div style={{ minHeight: 697, ...bgCard }} className="border shadow-lg bg-vs">
                    {
                      loading && (
                      <div className="custom_overlay">
                        <ClipLoader 
                          css={loaderCSS}
                          size={60}
                          loading={true}
                        />
                      </div>)
                    }
                    {
                      fightInProgress && (<div className="fixed-bar d-flex align-items-center justify-content-center">
                          <ProgressBar animated now={progress} min={0} max={100} className="w-lg-60 w-md-60" />
                        </div>)
                    }
                    <div className="container">
                      <Row className="d-flex justify-content-center mb-2">
                        <div><span className="battle-name-label shadow">{`${battle_number}. ${name}`}</span></div>
                      </Row>
                      <Row className="d-flex justify-content-center mb-2">
                        <div className="battle-history text-white">
                          <div>{`Location: ${location}`}</div>
                          <div>{`Region: ${region}`}</div>
                          <div>{`Year: ${year} `}</div>
                        </div>
                      </Row>
                      <Row>
                        <Col md={6} xs={12} className="p-4">
                          <div className="border battle-card left" style={ attacker_outcome === "win" ? winBg: lossBg }>
                            { !!outcome && (outcome === "attacker" ? (<div className="text outcome">
                                <GiCaduceus color="#ffc107" size="32px" />
                              </div>): (<div className="text outcome">
                                <GiDeathSkull color="#2684ff" size="32px" />
                              </div>))
                            }
                            <div className="text">
                              <Image src={crown} width={28} height={28} className="mr-2" />
                              <span>{attacker_king}</span>
                            </div>
                            <div className="text">
                              <Image src={sword} width={28} height={28} className="mr-2"  />
                              <span>{attacker_size || 0}</span>
                            </div>
                            <div className="text">
                              <GiRank3 size="28px" className="mr-2" color="#ffc107"/>
                              <span>{attacker_commander}</span>
                            </div>
                            <div className="text">
                              <Image src={ax} width={28} height={28} className="mr-2" />
                              <span>{arrToString([attacker_1, attacker_2, attacker_3, attacker_4])}</span>
                            </div>
                            <div className="text">
                              <GiThorHammer size="28px" className="mr-2" color="#ffc107"/>
                              <span>{battle_type}</span>
                            </div>
                            <div className="text">
                            { 
                              !!summer && (summer ? <GiSun size="28px" className="mr-2" color="#ffc107"/>: 
                              <GiSnowflake1 size="28px" className="mr-2" color="#fff"/>)
                            }
                            </div>
                          </div>
                        </Col>
                        <Col md={6} xs={12} className="p-4">
                          <div className="border battle-card right" style={ attacker_outcome === "win" ? lossBg: winBg }>
                            { !!outcome && (outcome === "attacker" ? (<div className="text outcome">
                                <GiDeathSkull color="#2684ff" size="32px"/>
                              </div>): (<div className="text outcome">
                                <GiCaduceus color="#ffc107" size="32px"/>
                              </div>))
                            }
                            <div className="text skew-right">
                              <Image src={crown} width={28} height={28} className="mr-2" />
                              <span>{defender_king}</span>
                            </div>
                            <div className="text skew-right">
                              <Image src={sword} width={28} height={28} className="mr-2"  />
                              <span>{defender_size || 0}</span>
                            </div>
                            <div className="text skew-right">
                              <GiRank3 size="28px" className="mr-2" color="#ffc107"/>
                              <span>{defender_commander}</span>
                            </div>
                            <div className="text skew-right">
                              <Image src={ax} width={28} height={28} className="mr-2" />
                              <span>{arrToString([defender_1, defender_2, defender_3, defender_4])}</span>
                            </div>
                            <div className="text">
                              <GiThorHammer size="28px" className="mr-2" color="#ffc107"/>
                              <span>{battle_type}</span>
                            </div>
                            <div className="text">
                            { 
                              !!summer && (summer ? <GiSun size="28px" className="mr-2" color="#ffc107"/>: 
                              <GiSnowflake1 size="28px" className="mr-2" color="#fff"/>)
                            }
                            </div>
                          </div>
                        </Col>
                      </Row>
                      {
                        !!note && <Row className="mt-2 mb-2">
                          <Col>
                            <span className="text-white">{note}</span>
                          </Col>
                        </Row>
                      }
                      {
                        !!attacker_outcome && <Row>
                          <Col md={4} className="m-auto">
                            <Button
                              variant="outline-info"
                              className="w-100"
                              onClick={startFight}
                              title="Start Fight"
                            >
                              Fight
                            </Button>
                          </Col>
                        </Row>
                      }
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )
        }
      </Container>
    </section>
  );
} 

Grid.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.search.loadingBattle,
  battle_id: state.search.battle_id,
  selectedBattle: state.search.selectedBattle,
});

export default connect(mapStateToProps, {
  getSearchedBattle
})(Grid);

