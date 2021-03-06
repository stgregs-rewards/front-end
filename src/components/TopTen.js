import React, { useEffect, useState } from 'react';

import Card from "./Card";
import Dropdown from "./Dropdown";
import TopTenItem from './TopTenItem';
import Modal from './Modal';

import firebase from '../firebase';

export default function TopTen() {
  const topTenModeOptions = [
    {
      name: 'Current',
      value: 'current'
    },
    {
      name: 'Total',
      value: 'total' 
    }
  ];

  const topTenYearGroupOptions = [
    {
      name: 'All Years',
      value: 'all'
    },
    {
      name: 'Year 7',
      value: 7
    },
    {
      name: 'Year 8',
      value: 8
    },
    {
      name: 'Year 9',
      value: 9
    },
    {
      name: 'Year 10',
      value: 10
    },
    {
      name: 'Year 11',
      value: 12
    },
    {
      name: 'Year 12',
      value: 12
    },
  ];

  const placeText = [
    {
      place: 1,
      sup: 'st'
    },
    {
      place: 2,
      sup: 'nd'
    },
    {
      place: 3,
      sup: 'rd'
    },
    {
      place: 4,
      sup: 'th'
    },
    {
      place: 5,
      sup: 'th'
    },
    {
      place: 6,
      sup: 'th'
    },
    {
      place: 7,
      sup: 'th'
    },
    {
      place: 8,
      sup: 'th'
    },
    {
      place: 9,
      sup: 'th'
    },
    {
      place: 10,
      sup: 'th'
    }
  ];

  const _tempStudents = [
    {
      first_name: 'Cooper',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '150',
      year_group: '12',
      student_id: '63895'
    },
    {
      first_name: 'Cristian',
      last_name: 'LUSTRI',
      house: 'Laurentian',
      points: '100',
      year_group: '12',
      student_id: '64789'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    }
  ];

  const [topTenStudents, setTopTenStudents] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState({});

  useEffect(async () => {
    setTopTenStudents(_tempStudents);
  }, []);

  const handleShowProfile = student => {
    setShowProfile(true);
    setProfileData(student);
  }

  const handleHideProfile = () => setShowProfile(false);

  const topTenModeChange = e => {
    const { value } = e.target;
  }

  const topTenYearGroupsChange = e => {
    const { value } = e.target;
  }

  return (
    <>
      <Card
        header={
          <div className="row align-items-center" style={{height: 35}}>
            <div className="col">
              <h4 className="mb-0">Top Ten</h4>
            </div>
            <div className="col-auto" style={{padding: 0}}>
              <Dropdown
                id="top-ten-mode-dropdown"
                options={topTenModeOptions}
                onChange={topTenModeChange}
              />
            </div>
            <div className="col-auto">
            <Dropdown
                id="top-ten-year-dropdown"
                options={topTenYearGroupOptions}
                onChange={topTenYearGroupsChange}
              />
            </div>
          </div>
        }
        body={
          <div className="list-group toptenlist" style={{padding: '1.3rem'}}>
            <div className="row">
              <div className="col-12 col-md-6">
                {
                  topTenStudents.slice(0, 5).map((student, i) => {
                    return <TopTenItem 
                      place={placeText[i].place}
                      sup={placeText[i].sup}
                      student={student}
                      click={handleShowProfile}
                    />
                  })
                }
              </div>
              <div className="col-12 col-md-6">
                {
                  topTenStudents.slice(5, 10).map((student, i) => {
                    return <TopTenItem 
                      place={placeText[i + 5].place}
                      sup={placeText[i + 5].sup}
                      student={student}
                      click={handleShowProfile}
                    />
                  })
                }
              </div>
            </div>
          </div>
        }
      />
      <Modal
        title={profileData.first_name + "'s profile"}
        body={
          <div></div>
        }
        onShow={showProfile}
        onClose={handleHideProfile}
      />
    </>
  );
}