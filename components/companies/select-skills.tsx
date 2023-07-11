/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer, useState } from "react";
import cn from "classnames";
import { useFormikContext } from "formik";
import { CompanyPreSignupFormData } from "./pre-sign-up-steps";
import Fieldset from "@components/fieldset";
import { Skill, skills } from "./skills";
import { useEffect } from "react";
import { Button } from "antd";

enum RecommendedSkillActionTypes {
  CLICKED = "CLICKED",
  FILTER = "FILTER",
  RESET = "RESET",
  NOT_SURE = "NOT_SURE",
  DESELECT_NOT_SURE = "DESELECT_NOT_SURE",
  RESELECT = "RESELECT",
}

type ClickedAction = {
  type: RecommendedSkillActionTypes.CLICKED;
  payload: string;
};
type FilterAction = {
  type: RecommendedSkillActionTypes.FILTER;
  payload: string;
};
type ResetAction = {
  type: RecommendedSkillActionTypes.RESET;
};
type NotSureAction = {
  type: RecommendedSkillActionTypes.NOT_SURE;
};
type DeselectNotSureAction = {
  type: RecommendedSkillActionTypes.DESELECT_NOT_SURE;
};
type ReselectAction = {
  type: RecommendedSkillActionTypes.RESELECT;
  payload: any;
};

type Action =
  | ClickedAction
  | FilterAction
  | ResetAction
  | NotSureAction
  | DeselectNotSureAction
  | ReselectAction;

interface InitialState {
  skills: Skill[];
}

const initalState: InitialState = {
  skills: skills,
};

const recommendedSkillsReducer = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
  case RecommendedSkillActionTypes.CLICKED: {
    const updatedSkills = state.skills.map((skill) => {
      if (skill.id === action.payload) {
        return { ...skill, selected: !skill.selected };
      }
      return skill;
    });
    return { ...state, skills: updatedSkills };
  }
  case RecommendedSkillActionTypes.FILTER: {
    const updatedSkills = state.skills.filter((skill) => {
      return (
        action.payload !== undefined &&
          skill.label.toLowerCase().includes(action.payload.toLowerCase())
      );
    });
    return { ...state, skills: updatedSkills };
  }
  case RecommendedSkillActionTypes.NOT_SURE: {
    const updatedSkills = state.skills.map((skill) => {
      return skill.id === "not-sure"
        ? { ...skill, selected: true }
        : { ...skill, selected: false };
    });
    return { ...state, skills: updatedSkills };
  }
  case RecommendedSkillActionTypes.DESELECT_NOT_SURE: {
    const updatedSkills = state.skills.map((skill) => {
      return skill.id === "not-sure" ? { ...skill, selected: false } : skill;
    });
    return { ...state, skills: updatedSkills };
  }
  case RecommendedSkillActionTypes.RESELECT: {
    const updatedSkills = state.skills.map((skill) => {
      if (action.payload.indexOf(skill.label) > -1) {
        return { ...skill, selected: true };
      }
      return skill;
    });
    return { ...state, skills: updatedSkills };
  }

  case RecommendedSkillActionTypes.RESET:
    return initalState;
  default:
    return initalState;
  }
};

const SelectSkills = () => {
  const { setFieldValue, values } =
    useFormikContext<CompanyPreSignupFormData>();

  const [state, dispatch] = useReducer(recommendedSkillsReducer, initalState);
  const [isOthers, setOthers] = useState(false)

  const onSearch = (searchText: string) => {
    dispatch({ type: RecommendedSkillActionTypes.RESET });
    dispatch({ type: RecommendedSkillActionTypes.FILTER, payload: searchText });
  };

  useEffect(() => {
    const prevSelectedSkills = values["skills"];
    if (!prevSelectedSkills.length) return;
    dispatch({
      type: RecommendedSkillActionTypes.RESELECT,
      payload: prevSelectedSkills,
    });
  }, []);

  useEffect(() => {
    const selectedSkills = state.skills
      .filter((skill) => skill.selected)
      .map((value) => value.label);

    if (selectedSkills.length > 0) {
      setFieldValue("skills", selectedSkills);
    }
  }, [state.skills, setFieldValue]);

  const onSkillClicked = (id: string) => {
    if (id === "not-sure") {
      dispatch({ type: RecommendedSkillActionTypes.NOT_SURE });
    } else {
      dispatch({ type: RecommendedSkillActionTypes.DESELECT_NOT_SURE });
      dispatch({ type: RecommendedSkillActionTypes.CLICKED, payload: id });
    }
  };

  return (
    <div>
      {/* <Input
        size='large'
        placeholder='Search skills'
        className='w-full my-4'
        onChange={(e) => onSearch(e.target.value)}
      /> */}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
        {state.skills.map(({ label, icon, selected, id }) => {
          return (
            <div
              key={id}
              onClick={() => onSkillClicked(id)}
              className={cn( 
                " flex justify-start shadow-lg  gap-3 items-center border-[1px] text-center px-4 py-4 hover:text-white hover:shadow-md duration-200 rounded-[4px] cursor-pointer bg-[#715ef91a]",
                selected
                  ? " text-white border-[#715EF9] shadow-[#1018281a] "
                  : "text-[#908E9F]  border-[#252234] shadow-[#1018280f]"
              )}
            >
              <div className='w-5 fill-current'>{icon}</div>
              <div className={cn({ "font-semibold": selected  })}>{label}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button
          className={cn( 
            " flex justify-start shadow-lg  gap-3 items-center border-[1px] text-center p-6 hover:text-white hover:shadow-md duration-200 rounded-[4px] cursor-pointer bg-[#715ef91a]",
            isOthers
              ? " text-white border-[#715EF9] shadow-[#1018281a] "
              : "text-[#908E9F]  border-[#252234] shadow-[#1018280f]"
          )}
          type="text"
          onClick={()=>setOthers(!isOthers)}
        >
       Other skills</Button>
      </div>
      <Fieldset
        className={`${isOthers ? "block" : "hidden"} mt-4 rounded-md text-gray-700`}
        name='additionalInfo'     
        customLabelFont=" text-gray-700" 
       
        placeholder='Enter the New role or skill that is not listed out'
        isTextArea={true}
        rows={4}
      />
    </div>
  );
};

export default SelectSkills;