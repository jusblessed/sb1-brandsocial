import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Rocket } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { Brand, Step } from '../types';

const steps: Step[] = [
  {
    id: 'basics',
    title: 'Brand Basics',
    description: 'Let’s define the core elements of your brand.',
  },
  {
    id: 'mission',
    title: 'Mission & Vision',
    description: 'What drives your business forward?',
  },
  {
    id: 'audience',
    title: 'Target Audience',
    description: 'Who are you serving, and how do you provide value?',
  },
  {
    id: 'values',
    title: 'Core Values',
    description: 'Define the principles guiding your brand.',
  },
  {
    id: 'uvp',
    title: 'Unique Value Proposition',
    description: 'What sets your brand apart?',
  },
];

export function BrandForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [brand, setBrand] = useState<Brand>({
    name: '',
    industry: '',
    mission: '',
    vision: '',
    values: [''],
    longTermVision: '',
    targetAudience: {
      demographics: '',
      interests: [''],
      painPoints: [''],
    },
    uniqueValueProposition: '',
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log('Brand profile completed:', brand);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">
                What is your business or brand name?
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={brand.name}
                onChange={(e) =>
                  setBrand((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">
                What industry does your brand serve?
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={brand.industry}
                onChange={(e) =>
                  setBrand((prev) => ({ ...prev, industry: e.target.value }))
                }
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">
                What is your mission statement?
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                rows={3}
                value={brand.mission}
                onChange={(e) =>
                  setBrand((prev) => ({ ...prev, mission: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">
                What is your vision for the future?
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                rows={3}
                value={brand.vision}
                onChange={(e) =>
                  setBrand((prev) => ({ ...prev, vision: e.target.value }))
                }
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">
                Who is your target audience? Describe their demographics.
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                rows={3}
                value={brand.targetAudience.demographics}
                onChange={(e) =>
                  setBrand((prev) => ({
                    ...prev,
                    targetAudience: {
                      ...prev.targetAudience,
                      demographics: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-200">
              What are your brand’s core values?
            </label>
            {brand.values.map((value, index) => (
              <input
                key={index}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                value={value}
                onChange={(e) => {
                  const newValues = [...brand.values];
                  newValues[index] = e.target.value;
                  setBrand((prev) => ({ ...prev, values: newValues }));
                }}
              />
            ))}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-200">
              What makes your brand unique? What is your unique value proposition?
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
              rows={3}
              value={brand.uniqueValueProposition}
              onChange={(e) =>
                setBrand((prev) => ({
                  ...prev,
                  uniqueValueProposition: e.target.value,
                }))
              }
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 p-6 text-white"
    >
      <div className="max-w-3xl mx-auto">
        <StepIndicator steps={steps} currentStep={currentStep} />
        <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
          <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
          <p className="text-gray-600 mb-6">{steps[currentStep].description}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center px-4 py-2 rounded-md ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-red-600 hover:bg-gray-200'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 bg-white text-red-600 rounded-md hover:bg-gray-200"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center px-4 py-2 bg-white text-red-600 rounded-md hover:bg-gray-200"
                >
                  Complete
                  <Rocket className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}