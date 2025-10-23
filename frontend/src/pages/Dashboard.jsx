import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalMatches: 0,
    newMatches: 0,
    profileViews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user stats
    const timer = setTimeout(() => {
      setStats({
        totalMatches: 12,
        newMatches: 3,
        profileViews: 47,
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Mixer! 👋
        </h1>
        <p className="text-gray-600">
          Ready to find your perfect match? Let's see what's new today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">
            {stats.totalMatches}
          </div>
          <div className="text-sm text-gray-600">Total Matches</div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl font-bold text-accent-600 mb-2">
            {stats.newMatches}
          </div>
          <div className="text-sm text-gray-600">New Matches</div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl font-bold text-secondary-600 mb-2">
            {stats.profileViews}
          </div>
          <div className="text-sm text-gray-600">Profile Views</div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <Card.Header>
            <Card.Title>Your Profile</Card.Title>
            <Card.Description>
              Keep your profile fresh and attractive
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Profile Completion
                </span>
                <span className="text-sm font-medium text-primary-600">
                  85%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Update Profile</Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Discover Matches</Card.Title>
            <Card.Description>Find your perfect match today</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="text-center py-4">
              <div className="text-4xl mb-2">💕</div>
              <p className="text-gray-600">
                {stats.newMatches > 0
                  ? `You have ${stats.newMatches} new matches waiting!`
                  : "No new matches yet, but keep swiping!"}
              </p>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="w-full">Start Swiping</Button>
          </Card.Footer>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8">
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
          <Card.Description>
            Your latest interactions and updates
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                You matched with Sarah 2 hours ago
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                Your profile was viewed 5 times today
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                You updated your interests yesterday
              </span>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Dashboard;
